import * as React from 'react';
import axios from 'axios';
import {serverUrl} from '../../helpers/Constants'

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const { updateReloadState } = props;
  
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try { 
        await axios.post(`${serverUrl}/shorturl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("")
      updateReloadState();
    } catch (error) {
        alert("The URL already exists")
        console.log(error);
    }
  };
  return(
    <div className='container mx-auto p-2'>
        <div className='bg-banner my-8 rounded-xl bg-cover'>
            <div className='w-full h-full rounded-xl p-20 backdrop-brightness-70 bg-cover bg-center'>
              <h2 className='text-white text-4xl text-center pt-2 pb-2'>URL SHORTNER</h2>
              <p className='text-white text-xl text-center pt-2 pb-2 font-light'>Paste there your untide URL and get short URL</p>
              <p className='text-white text-sm text-center pt-2 pb-4 font-thin'>Free tool to shorten your URL or make your link smaller. Use our site to create a shortened and neat link or URL for using</p>
              <form onSubmit={handleSubmit}>
                <div className='flex'>
                  <div className='relative w-full'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800'>urlshortner.link /</div>
                    <input value={fullUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)} type='text' className='block w-full p-4 ps-32 text-sm text-gray-900 border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500' placeholder='Add your link' required/>
                    <button type='submit' className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'>Shorten URL</button>
                  </div>
                </div>
              </form>
            </div>
        </div>
    </div>
  ) ;
};

export default FormContainer;
