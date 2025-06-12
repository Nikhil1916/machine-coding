export const CardRow = ({className , data}) => {
    return (
        <div className={`my-2 ${className}`}>
            <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
            <div className="flex gap-4 overflow-x-auto">
                {
                    data.cards.map((_)=>{
                        return (
                            <div key={_.id} className="min-w-[200px] max-w-[400px] bg-white p-4 rounded shadow">
                            <img src={_.image} className="rounded mb-2 max-h-[400px]" />
                            <h3 className="font-bold">{_.name}</h3>
                            <p className="text-sm text-gray-600">{_.description}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}