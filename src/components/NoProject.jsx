import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ onStartAdd }) {
    return (
        <div className="mt-24 text-center w-2/3 ">
            <img src={noProjectImage} alt="Tarefa vazia" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold text-stone-500 my-4" >Nenhum projeto selecionado</h2>
            <p className="text-stone-400 mb-4" >Seleciona um projeto ou começa um novo</p>
            <p className="mt-8">
                <Button onClick={onStartAdd} >Criar novo projeto</Button>
            </p>
        </div>
    );
}