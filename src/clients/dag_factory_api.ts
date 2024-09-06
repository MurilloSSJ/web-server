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
        operator: "BashOperator" | "PythonOperator" | "DummyOperator" | "BranchPythonOperator" | "ShortCircuitOperator" | "EmailOperator" | "SimpleHttpOperator" | "SQLExecuteQueryOperator" | "SQLOperator"
        operator_args: object
        function?: string
        script?: string
    }[]
}

const createDag = async (dag: DagModel) => {
    // https://reflow-api-1.onrender.com/api/dag
    console.log(dag)
    for (let i = 0; i < dag.tasks.length; i++) {

        if (dag.tasks[i].operator === "DummyOperator") {
            dag.tasks[i].operator_args = {}
        }
        else if (dag.tasks[i].operator === "PythonOperator") {
            dag.tasks[i].function = dag.tasks[i].operator_args.function
            dag.tasks[i].operator_args = { python_callable: dag.tasks[i].operator_args.python_callable }

        }
        else if (dag.tasks[i].operator === "BashOperator") {
            dag.tasks[i].script = dag.tasks[i].script
            dag.tasks[i].operator_args = { bash_command: dag.tasks[i].operator_args.bash_command }
        }
        else if (dag.tasks[i].operator == "SQLOperator") {
            dag.tasks[i].operator = "SQLExecuteQueryOperator"
            dag.tasks[i].operator_args = { sql: dag.tasks[i].operator_args.sql, database: dag.tasks[i].operator_args.database, conn_id: dag.tasks[i].operator_args.conn_id }
        }
    }

    const response = await axios.post(`https://reflow-api-1.onrender.com/api/dag`, dag, { responseType: 'blob' }).then((response) => response)
    if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${dag.dag_id}.py`);
        document.body.appendChild(link)
        link.click();
        return response.data
    }
    else {
        console.log(response)
    }

}

export const dagFactoryApi = {
    create: createDag
}