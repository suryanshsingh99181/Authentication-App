const ErrorMsg = (msg) => {
    return ( 
    <><div>
    <div class="relative mt-2 rounded-md shadow-sm">
     <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
     <p
       name="error-msg"
       id="error-msg"
       class="block w-1/3 m-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 bg-indigo-200 ring-1 ring-inset sm:text-sm sm:leading-6"
       >{msg}</p>
     
   </div>
 </div>     
    </>
     );
}
 
export default ErrorMsg;