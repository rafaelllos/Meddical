import './Accountpage.css'

function Accountpage() {
    return ( 
        <>
            <div className="account__container">
                <div className="account__title">Здравствуйте, Андрей!</div>

                <div className="account__item">
                    <p className="account__item-title">Ваши записи в клинике</p>
                    
                    <div className="account__item-tables">
                        <div className="account__item-table">
                            <p className="table__item"><span>Дата:</span> 16.03.23</p>
                            <p className="table__item"><span>Время:</span> 09:15</p>
                            <p className="table__item"><span>Отдел:</span> Травмотология</p>
                            <p className="table__item"><span>Пожелания:</span></p>
                        </div>

                        <div className="account__item-table">
                            <p className="table__item"><span>Дата:</span> 21.02.23</p>
                            <p className="table__item"><span>Время:</span> 18:30</p>
                            <p className="table__item"><span>Отдел:</span> Неврология</p>
                            <p className="table__item"><span>Пожелания:</span></p>
                        </div>
                        
                        <div className="account__item-table">
                            <p className="table__item"><span>Дата:</span> 15.01.23</p>
                            <p className="table__item"><span>Время:</span> 12:00</p>
                            <p className="table__item"><span>Отдел:</span> Неврология</p>
                            <p className="table__item"><span>Пожелания:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus labore est, dolores quas voluptatum sunt dignissimos, quasi ducimus ipsa temporibus fugiat tempora similique laudantium nihil natus dolorum alias accusantium?</p>
                        </div>
                        
                        <div className="account__item-table">
                            <p className="table__item"><span>Дата:</span> 02.12.22</p>
                            <p className="table__item"><span>Время:</span> 15:20</p>
                            <p className="table__item"><span>Отдел:</span> Кардиология</p>
                            <p className="table__item"><span>Пожелания:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, aliquid.</p>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Accountpage;