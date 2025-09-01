import React, {useState , useEffect} from "react";
import axios from "axios";

const UserList = ()=>{
    const [listOfUsers , setListOfUsers]= useState([])  
    const [error , setError] = useState("")

    useEffect(()=>{
        const fetchUsers = async () =>{
            try{
                const{ data}  = await axios.get("https://jsonplaceholder.typicode.com/users");
                setListOfUsers(data)
            }catch(err){
                setError("Error fetching data")
                console.log(err)
            }
        }
        fetchUsers()
    }, [])
return(
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 mb-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                    User Directory
                </span>
            </h1>
            
            {error && (
                <div className="rounded-md bg-red-50 p-4 mx-auto max-w-md mb-8">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">{error}</h3>
                        </div>
                    </div>
                </div>
            )}
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {listOfUsers.map(user => (
                    <div key={user.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="px-6 pt-6 pb-4">
                            <div className="flex items-center">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                                    {user.name.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                                    <p className="text-sm text-gray-500">@{user.username}</p>
                                </div>
                            </div>
                            
                            <div className="mt-6 space-y-4">
                                <div className="flex items-start">
                                    <svg className="h-5 w-5 text-gray-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span className="ml-3 text-gray-600 text-sm">{user.email}</span>
                                </div>
                                
                                <div className="flex items-start">
                                    <svg className="h-5 w-5 text-gray-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <div className="ml-3">
                                        <p className="text-sm text-gray-600">{user.address.street}</p>
                                        <p className="text-sm text-gray-600">{user.address.city}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <svg className="h-5 w-5 text-gray-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span className="ml-3 text-gray-600 text-sm">{user.phone}</span>
                                </div>
                                
                                <div className="flex items-start">
                                    <svg className="h-5 w-5 text-gray-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                    </svg>
                                    <a href={`https://${user.website}`} className="ml-3 text-indigo-600 hover:text-indigo-500 text-sm" target="_blank" rel="noopener noreferrer">
                                        {user.website}
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2">Company</h3>
                                <p className="text-sm text-gray-700 font-medium">{user.company.name}</p>
                                <p className="text-xs text-gray-500 italic mt-1">"{user.company.catchPhrase}"</p>
                                <div className="mt-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                        {user.company.bs}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)


}

export default UserList;
