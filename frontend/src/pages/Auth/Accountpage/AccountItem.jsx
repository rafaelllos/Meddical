const AccountItem = ({info}) => {
    return (  
        <div className="account__item-table">
            <p className="table__item"><span>Дата:</span> {info.application_date}</p>
            <p className="table__item"><span>Время:</span> {info.application_time}</p>
            <p className="table__item"><span>Отдел:</span> {info.application_department}</p>
            <p className="table__item"><span>Пожелания:</span> {info.user_text}</p>
        </div>
    )
}
 
export default AccountItem