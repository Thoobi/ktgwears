import ReactCurvedText from 'react-curved-text';
import stroke from '../../assets/stroke.svg'
import ktgwear2 from '../../assets/ktg3.png'
import ktgwear3 from '../../assets/ktg4.png'

const Welcomesreen = () => {
  return (
    <header className={`mt-5 px-10 pt-10`} style={{backgroundImage: 'url(/src/assets/Home2.png)', backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100vh', width: '100%'}}>
      <div className='h-full flex flex-col items-start justify-center border-2 border-red-600 relative'>
        <div className='flex flex-row items-start justify-start -rotate-90 border-2 border-green-400 absolute -left-64'>
          <h1 className="text-[144px] border-2 border-yellow-400 font-medium leading-snug text-start">kingtogods</h1>
          <span className="text-red-600 text-6xl font-bold bounce self-end py-12">•</span>
        </div>
        
      </div>
      {/* <div className="flex w-full rotate-90 items-start pt-96">
        <div className='flex'>
          <h1 className="text-[10rem] group font-medium text-start">kingtogods</h1>
          <span className="text-red-600 text-9xl font-bold bounce self-center">.</span>
        </div>
        <ReactCurvedText width='240'
        height='250'
        cx='100'
        cy='130'
        rx={100}
        ry={100}
        startOffset={50}
        reversed={false}
        text='• kingtogods • kingtogods • kingtogods • kingtogods • kingstogods •'
        textProps={{"style": {"fontSize": 18, "fontWeight": 600}}}
        textPathProps={null}
        tspanProps={{"dy": "-12"}}
        ellipseProps={null}
        svgProps={null} />
        <div className='absolute top-28 right-36 -rotate-[90deg] hover:cursor-pointer hover:ease-out hover:-translate-x-4 hover:duration-300'>
          <img
            className="w-16 h-16"
            src={stroke}
            alt=''
          />
        </div>
      </div> */}
    </header>
  )
}

export default Welcomesreen