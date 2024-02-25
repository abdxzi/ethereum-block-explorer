import "./Topbar.css";
import { useRef } from 'react';
import toast from 'react-hot-toast';


function identifyInputType(input) {

    // const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    // const transactionHashRegex = /^0x[a-fA-F0-9]{64}$/;
    const blockNumberRegex = /^\d+$/;
  
    // if (ethereumAddressRegex.test(input)) {
    //   return 'address';
    // } else if (transactionHashRegex.test(input)) {
    //   return 'Transaction Hash';
    // } else 
    if (blockNumberRegex.test(input)) {
      return 'blockno';
    } else {
      return undefined;
    }
  }

//   0x71C7656EC7ab88b098defB751B7401B5f6d8976F


function Topbar({setBlock}) {

    const inputRef = useRef(null);

    const handleSubmit = () => {

        const type = identifyInputType(inputRef.current.value);

        if(type=='blockno'){
          setBlock(parseInt(inputRef.current.value));
        }

        if(type==undefined){
          toast.error("Enter valid block Number !", {
            duration: 1000,
            position: 'top-center',
          });
        }
    }

    const handleEnter = (e) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    }

    return(
        <div className="top flex align-items">
            <h2>Ethreum Block Explorer</h2>
            <div className="search flex">
                    <input ref={inputRef} onKeyDown={handleEnter} placeholder="Enter Block number"/>
                    <svg onClick={handleSubmit} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)"/><path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"/><path fill="#37474F" d="M36.2 32.1H40.2V44.400000000000006H36.2z" transform="rotate(-45.001 38.24 38.24)"/><path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"/><path fill="#BBDEFB" d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"/></svg>
            </div>
        </div>
    );
}

export default Topbar;