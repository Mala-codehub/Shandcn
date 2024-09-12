import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function InputDemo1() {
  return (
    <div className="relative">
      <Input 
        type="email" 
        className="pl-20 pr-16 border-gray-300" // Adjusted padding to fit the SVG icons and separators
      />
      
      {/* First SVG icon with a border on the right */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 border-r">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
</svg>

      </div>
      
      {/* Second SVG icon with a border on the right */}
      <div className="absolute inset-y-0 left-8 flex items-center pl-2 border-r">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>

      </div>
      
      {/* Third SVG icon without a border */}
      <div className="absolute inset-y-0 left-16 flex items-center pl-2 border-r">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" 
          />
        </svg>
      </div>
      <div className="absolute inset-y-0 left-24 flex items-center pl-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>

      </div>
    </div>
  );
}

export default InputDemo1;
