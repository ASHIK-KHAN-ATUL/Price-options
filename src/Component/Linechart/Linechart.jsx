import { LineChart as LChart , Line , XAxis, YAxis} from 'recharts';

const Linechart = () => {

    const studentMarksData = [
        { "name": "Ashik", "math": 78, "physics": 82, "chemistry": 75 },
        { "name": "Ratul", "math": 85, "physics": 78, "chemistry": 88 },
        { "name": "Naim", "math": 92, "physics": 90, "chemistry": 85 },
        { "name": "Shazid", "math": 74, "physics": 76, "chemistry": 80 },
        { "name": "Rohan", "math": 88, "physics": 84, "chemistry": 91 },
        { "name": "Maruf", "math": 90, "physics": 92, "chemistry": 89 },
        { "name": "Sabbir", "math": 83, "physics": 81, "chemistry": 77 },
        { "name": "Tariq", "math": 76, "physics": 75, "chemistry": 80 },
        { "name": "Imran", "math": 95, "physics": 89, "chemistry": 94 },
        { "name": "Sami", "math": 80, "physics": 84, "chemistry": 78 }
    ]
    
    


    return (
        <div>
            <LChart width={800} height={400} data={studentMarksData}>
                <XAxis dataKey="name" ></XAxis>
                <YAxis dataKey=''></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green' ></Line>
                <Line dataKey="chemistry" stroke='blue' ></Line>
            </LChart>
        </div>
    );
};

export default Linechart;