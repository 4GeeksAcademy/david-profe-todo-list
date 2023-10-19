import React, { useState } from "react";
import style from '../../styles/home.module.css'


//create your first component
const Home = () => {

	const [todo, setTodo] = useState("")
	const [list, setList] = useState([])

	const modifToDo = (e) => {
		setTodo(e.target.value)
	}

	const addToList = (e) => {
		if (e.key === "Enter" && todo !== "") {
			setList([...list, todo])
			console.log("La lista actualmente tiene: ", list)
			setTodo("")
		}
	}

	return (
		<div className={`text-center total ${style.total}`}>
			<div>
				<ul className={`list-group ${style.laLista}`}>
				<input className={`list-group-item ${style.cadaTarea}`} value={todo} onChange={(e) => modifToDo(e)} onKeyDown={(e)=>addToList(e)}/>
				{	
					list.length > 0 ? (
						<>
							{list.map((ele,indx) =>(
							<li key={indx} className={`list-group-item ${style.cadaTarea}`}>{ele}</li>
							))}
							<li className={`list-group-item ${style.textoDiferente}`}>{`Tienes ${list.length} tareas por hacer.`}</li>
							
						</>
					):(
						<li className={`list-group-item ${style.textoDiferente}`}>Nada para hacer! hora de netflix</li>
					)
				}
				</ul>
			</div>
		</div>
	);
};

export default Home;
