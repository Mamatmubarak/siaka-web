import Image from 'next/image'


export default function Error404() {
  return (
    <div className='error'>
        <Image src="/icon/404.svg" width={453} height={453} />
    </div>
  )
}
