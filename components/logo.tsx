const Logo = () => {
  return (
    <div className="inline-flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        width={24}
        height={24}
        data-name="Layer 1"
        viewBox="0 0 24 24"
      >
        <path
          fill="hsl(221 83.19% 53.33%)"
          d="m15,7.218c0,.867-1.072,2.285-2.798,3.699-.117.096-.287.096-.404,0-1.726-1.415-2.798-2.832-2.798-3.699,0-.672.449-1.218,1-1.218.483,0,1,.263,1,1,0,.552.448,1,1,1s1-.448,1-1c0-.737.517-1,1-1,.551,0,1,.546,1,1.218ZM2,21c0,1.657,1.343,3,3,3h12c2.761,0,5-2.239,5-5v-1H5c-1.657,0-3,1.343-3,3ZM22,5v11H5c-.203,0-.406.02-.605.061-.87.104-1.696.437-2.395.964V4.973c0-2.744,2.224-4.973,4.967-4.973h10.033c2.761,0,5,2.239,5,5Zm-5,2.218c0-1.774-1.346-3.218-3-3.218-.782,0-1.477.27-2,.727-.523-.457-1.218-.727-2-.727-1.654,0-3,1.444-3,3.218,0,1.944,1.92,3.926,3.53,5.247.426.349.948.522,1.47.522s1.044-.174,1.47-.523c1.61-1.319,3.53-3.301,3.53-5.246Z"
        />
      </svg>
      <span className="text-xl">
        Book<span className="font-semibold text-blue-600">Nest</span>
      </span>
    </div>
  );
};

export default Logo;
