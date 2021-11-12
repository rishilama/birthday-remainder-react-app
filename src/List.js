function List({ people }) {
    return (
        <>
            {people.map((individualPerson) => {
                return (
                    <article key={individualPerson.id} className="person">
                        <img src={individualPerson.image} alt={individualPerson.name} />
                        <div>
                            <h4>{individualPerson.name}</h4>
                            <p>{individualPerson.age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default List;