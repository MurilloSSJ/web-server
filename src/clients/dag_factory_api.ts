import axios from 'axios';

type DagModel = {
    dag_id: string
    description?: string
    schedule_interval: string
    start_date: Date
    tasks: {
        task_id: string
        task_group: string
        dependencies: string[]
        operator: "BashOperator" | "PythonOperator" | "DummyOperator" | "BranchPythonOperator" | "ShortCircuitOperator" | "EmailOperator" | "SimpleHttpOperator"
        operator_args: JSON
        function?: string
        script?: string
    }
}

const createDag = async (dag: DagModel) => {
    const response = await axios.post(`https://reflow-api-1.onrender.com/api/dag`, dag);
    console.log(response.data)
    return response.data;
}

export const dagFactoryApi = {
    create: createDag
}