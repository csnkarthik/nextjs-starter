import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import { useEffect } from 'react';

const Home = () => 
{
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch(`/api/weatherapi/1.0/weather`);
        const newData = await response.json();
        setData(newData);
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }

    };
    fetchData();

  }, [data]);


  
  return (  
    <div className="home">
      <h1>What Can I Deploy to Static Apps?</h1>
      <div className="card-grid">
        {projects.map((project) => {
          const Icon = projectIcons[project.id];
          return (
            <SmallCard
              key={project.id}
              Icon={Icon}
              title={project.name}
              slug={project.slug}
            />
          );
        })}
        <p>{response}</p>
      </div>
    </div>
  );
}

export default Home;
