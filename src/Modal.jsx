export const Modal = ({ setModal, opisforModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md ">
            <div className="bg-white rounded-lg p-8">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1>{opisforModal}</h1>
                    <button
                        className="px-16 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 duration-500"
                        onClick={() => setModal(false)}>
                        Закрыть
                    </button>

                </div>
            </div>

        </div>)
}





