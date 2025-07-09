import { useState } from "react";
import { supabase } from "@/lib/supaClient";
import { FiLogOut, FiUploadCloud } from "react-icons/fi";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

const UploadForm = () => {
  const { handleAdminLogout } = useAuth();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState([]);
  const [category, setCategory] = useState("Hoodies");
  const [imageFile, setImageFile] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  //   const [user, setUser] = useState(null);
  const options = [
    { id: 1, label: "XS" },
    { id: 2, label: "SM" },
    { id: 3, label: "M" },
    { id: 4, label: "L" },
    { id: 5, label: "XL" },
    { id: 6, label: "XXL" },
  ];

  const handleSelect = (optionId) => {
    setSize((prev) => {
      if (prev.includes(optionId)) {
        return prev.filter((id) => id !== optionId);
      }
      // If item is not selected, add it
      return [...prev, optionId];
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file || "");
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!name || !price || !category || !imageFile) {
      toast.error("❌ Please fill all fields and select an image.");
      return;
    }

    try {
      setUploading(true);

      const fileName = `${Date.now()}_${imageFile.name}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("clothes")
        .upload(filePath, imageFile);

      if (uploadError) {
        toast.error("❌ Upload failed at storage.");
        console.error("Storage error:", uploadError);
        return;
      }

      const { data: urlData } = supabase.storage
        .from("clothes")
        .getPublicUrl(filePath);

      const imageUrl = urlData?.publicUrl;
      console.log("Image URL:", imageUrl);

      const { error: insertError } = await supabase.from("clothes").insert([
        {
          name,
          price: Number(price),
          category,
          image_url: imageUrl,
          size: JSON.stringify(size),
        },
      ]);

      if (insertError) {
        toast.error("❌ Upload failed at database.");
        console.error("DB error:", insertError);
        return;
      }

      toast.success("✅ Clothes uploaded!");
      setName("");
      setPrice("");
      setCategory("Men");
      setImageFile("");
      setSize([]);
      setImagePreview("");
    } catch (err) {
      console.error("❌ Unexpected error:", err.message);
      toast.error("Something went wrong. Try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-2xl rounded-xl font-clash">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-medium flex items-center gap-2">
          <FiUploadCloud className="text-black" /> Upload New Wear
        </h2>
        <button
          className="text-red-600 text-sm hover:underline flex items-center gap-1"
          onClick={handleAdminLogout}
        >
          <FiLogOut size={16} /> Sign Out
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleUpload} className="space-y-4 mb-10">
        <div>
          <label className="block text-sm font-medium mb-1">Clothe Name</label>
          <input
            type="text"
            placeholder="e.g. Rolex Submariner"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price (₦)</label>
          <input
            type="number"
            placeholder="e.g. 250000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="Hoodies">Hoodies</option>
            <option value="SweatShirts">SweatShirts</option>
            <option value="Cargo Pants">Cargo Pants</option>
            <option value="Polo">Polo</option>
            <option value="Joggers">Joggers</option>
            <option value="Two Piece">Two Piece</option>
            <option value="Essentials">Essentials</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <span>
            <label className="block text-sm font-medium mb-1">
              Select Available Size:
            </label>
          </span>
          {options.map((option) => (
            <label
              key={option.id}
              className="flex items-center flex-row gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={size.includes(option.label)}
                onChange={() => handleSelect(option.label)}
                className="w-3 h-3"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}

          <div className="mt-4">
            <h3>Selected Items:</h3>
            <div className="flex  flex-wrap gap-2 mt-2">
              {size.length > 0 ? (
                <ul className="list-none flex flex-wrap gap-2">
                  {size.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm bg-red-600 text-white px-3 py-1 rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No sizes selected</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Clothes Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border p-2 rounded bg-gray-50"
          />
        </div>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-56 object-cover rounded border mt-2"
          />
        )}
        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-black text-white py-2 rounded font-medium hover:bg-gray-900 transition"
        >
          {uploading ? "Uploading..." : "Upload Wear"}
        </button>
      </form>

      {/* Watch List */}
      <hr className="mb-6" />
      {/* <WatchList key={refreshKey} /> */}
    </div>
  );
};

export default UploadForm;
