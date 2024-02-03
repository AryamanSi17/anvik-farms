import { useState,useEffect  } from 'react'
import Lottie from 'react-lottie';
import './HomePage.css'
const HomePage = () => {
    const [animationData, setAnimationData] = useState(null);
    useEffect(() => {
        // Fetch the animation data from the provided URL
        fetch('https://lottie.host/61465684-e476-4667-b562-87ff65e13ddc/KMe1UroL5k.json')
          .then((response) => response.json())
          .then((data) => {
            setAnimationData(data);
          })
          .catch((error) => {
            console.error('Error fetching animation data:', error);
          });
      }, []);
      const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
      return (
        <div className="flex items-center justify-center min-h-screen background-image">
            <div className="flex flex-row items-center justify-center w-full">
                <div className="w-1/2 h-full mx-4 flex items-center justify-center">
                    {animationData && (
                        <Lottie options={lottieOptions} height={400} width={400} />
                    )}
                </div>
                <div className="mx-4">
                    <h1 className="text-7xl font-bold text-gray-800">
                        Discover AnvikFarms
                    </h1>
                    <p className="text-lg text-gray-800">
                        Experience the Heart of Agriculture
                    </p>
                </div>
            </div>

        </div>
    );
      
    
}

export default HomePage