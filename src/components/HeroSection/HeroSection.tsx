import { Button } from "@/components/ui/button";
import FeaturesBar from "../Box/Box";
import { formatText } from "@/utils/function";
interface HeroSectionProps{
  tagLine:string,
  brandName:string
}
export default function HeroSection({tagLine,brandName}:HeroSectionProps) {
  return (
    <div
      className="relative h-[500px] w-full bg-cover bg-center opacity-90"
      style={{
        backgroundImage:
          'url(https://s3-alpha-sig.figma.com/img/b697/891c/20c7115ac77e7bbfb570051fee49705f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZ1nj-vHQ1Ef4ffSmhsL5e1E9aenm689VamsPqxct66V-zQNSMyZKo1HbQAdQeONDWieFVE72d6PEr1KLW~jNvEchUhfp0q2LasKQviWrcfHm43OF8BUm0bEaofnI7cPfvcasIAeA0PL1uNRvGtXUAQH7P70tpjO2lo~N5FFbjXMY8HLcvaR~HO461vqM9iAQRdXzawfvpTCeTx8ACjfx76MoY1ujrjflxbdRpWSZc6v8nx8YJOUU1o2cRA56IcnEhjSZGuthL4~ZKnfL4u-Grvo9rhtds5sUhGrFgxI49RjQJty-Nt-zxCuZvWAAfGYWR9ud8HykiGrRyEYvp3rBQ__)',
      }}
    ><div className="absolute inset-0 bg-primary opacity-20"></div>
      <div className="absolute inset-0 flex flex-col justify-end gap-2 items-center text-white text-center px-6 sm:px-4">
        <h1 className="text-4xl text-white font-bold">{brandName}</h1>
        {tagLine && ( // Render only if tagLine exists
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              {formatText(tagLine)}
            </h3>
          )}
        <p className="text-lg sm:text-base md:text-xl mb-6">
          The way mobile service should be.
        </p>
        <Button className="bg-white text-black px-6 py-3 sm:px-4 sm:py-2 font-semibold rounded-lg hover:bg-gray-200 mb-10">
          Get Started
        </Button>
      </div>
      

    </div>
  );
}
