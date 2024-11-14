import { Size } from "../../styles/LoginAndRegister/styles";

export function Input2 (type, id, placeholder, img) {
    return (
        <>
            <label htmlFor={id} className={`block mb-2 ${Size.LARGE} font-[sansation-regular]`}>{placeholder}</label>
            <div className="flex">
                <span className={`bg-white inline-flex items-center px-3 ${Size.LARGE} rounded-l-full border border-neutral-400`}>
                    <img src={img} alt="icon" className="w-[20px] h-[20px] text-gray-500" />
                </span>
                <input type={type} id={id} required className={`bg-white rounded-none rounded-r-full w-full h-[40px] border text-[#353C43] flex-1 ${Size.LARGE} border-neutral-400 p-3 border-l-0 font-[sansation-regular]`}  placeholder={placeholder}/>

            </div>
        </>
    )
}