import { useEffect, useState, useRef } from "react";
import { ProgressBar } from "react-bootstrap";
import Tree from "react-d3-tree";

// Interface for translation
interface ITranslate {
    x: number;
    y: number;
}

// Custom node for the tree
const CustomNode = ({ nodeDatum }: any) => (
    <g>
        {/* Rectangle as the background */}
        <rect
            width="150"
            height="80"
            x="-75"
            y="-40"
            fill="white"
            stroke="black"
            strokeWidth="2"
            rx="10"
            ry="10"
        />
        {/* Title text */}
        <text fill="black" x="0" y="-15" textAnchor="middle" fontSize="15">
            {nodeDatum.name}
        </text>
        {/* Progress bar container */}
        <foreignObject x="-65" y="0" width="130" height="50">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%' }}>
                <ProgressBar now={nodeDatum.progress} className="h-2" variant="black" />
                <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '5px', marginBottom: '0' }}>
                    {nodeDatum.progress}%
                </p>
            </div>
        </foreignObject>
    </g>
);

// Example data for the tree
const levelChart = {
    name: 'Root',
    progress: 15,
    children: [
        {
            name: 'Child 1',
            progress: 75,
            children: [
                { name: 'Grandchild 1', progress: 50 },
                { name: 'Grandchild 2', progress: 90 },
            ],
        },
        {
            name: 'Child 2',
            progress: 60,
            children: [{ name: 'Grandchild 3', progress: 30 }],
        },
    ],
};

export const ProfileRoadMap: React.FC = () => {
    const [translate, setTranslate] = useState<ITranslate>({ x: 0, y: 0 });
    const treeContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (treeContainerRef.current) {
                const containerWidth = treeContainerRef.current.offsetWidth;

                // Calculate the center of the container
                const xTranslate = containerWidth / 2;
                setTranslate({ x: xTranslate, y: 50 });
            }
        };

        // Initial calculation
        handleResize();

        // Update on window resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex flex-col mt-4 h-auto">
            {/* Road Map Title */}
            <div className="mb-4 flex items-start">
                <h1 className="font-bold text-3xl">Road Map</h1>
            </div>

            {/* Tree Component Container */}
            <div className="flex justify-center w-full">
              <div
                  ref={treeContainerRef}
                  className="flex w-[80%] h-[80vh] border border-gray-300 justify-center items-center relative"
                >
                  <Tree
                      orientation="vertical"
                      data={levelChart}
                      nodeSize={{ x: 200, y: 150 }} // Adjust as necessary
                      separation={{ siblings: 1, nonSiblings: 2 }}
                      translate={translate} // Center the tree
                      renderCustomNodeElement={CustomNode}
                  />
              </div>
            </div>
        </div>
    );
};

export default ProfileRoadMap;
