import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {

    const title = useRef();
    const descricao = useRef();
    const data = useRef();
    const modal = useRef();

    function handleSave() {
        const titleIns = title.current.value;
        const descricaoIns = descricao.current.value;
        const dataIns = data.current.value;

        if (titleIns.trim() === '' || descricaoIns.trim() === '' || dataIns.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: titleIns,
            descricao: descricaoIns,
            data: dataIns
        });
    }

    return (
        <>
            <Modal ref={modal} buttonText="Fechar">
                <h2 className="text-xl font-bold text-stone-700 my-4" >Dados invalidos!</h2>
                <p className="text-stone-600 mb-4" >Insere dados válidos nos campos.</p>
            </Modal>
            <div className="w-[35rem] mt-16 ">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancelar</button>
                    </li>
                    <li>
                        <button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Guardar</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label={"Titulo"} />
                    <Input ref={descricao} label={"Descrição"} textArea />
                    <Input type="date" ref={data} label={"Data"} />
                </div>
            </div>
        </>
    );
}