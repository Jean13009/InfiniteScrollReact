import React, { useEffect, useState, useRef } from "react";
import CategoriesAPI from '../services/CategoriesAPI';
import TableLoader from '../components/load/TableLoader';


const HomePage = props => {
    
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const loader = useRef(null);
    
    // Permet d'aller récupérer les customers
    const fetchCategories = async () => {
        try {
            const data = await CategoriesAPI.find(page);
            const newList = categories.concat(data);
            setCategories(newList);
            setLoading(false);
        } catch (error) {
            console.log("Impossible de charger les categories");
        }
    };
    
    
    useEffect(() => {
        window.scrollTo(0, 0);
        
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, []);
    
    useEffect(() => {
        setLoading(true);
        fetchCategories();
    }, [page]);
    
    const handleObserver = (entities) => {
        const target = entities[0];
        if(target.isIntersecting) {  

            setTimeout(() => {
                setPage((page) => page + 1);
            }, 100);

        }
    }
    
    
    
    return ( 
        <>
        <div className="container-fluid App">
        <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
        <table className="table">
        <thead>
        <tr>
        <th>
        </th>
        <th>
        Categorie
        </th>
        <th>
        </th>
        </tr>
        </thead>
        {!loading && (
            <tbody>
            {categories.map(category => (
                <tr className="table-active" key={category.id}>
                <td>
                {category.id}
                </td>
                <td>
                {category.title}
                </td>
                <td>
                </td>
                </tr>
                ))}
                </tbody>
                )}
                {loading &&
                    <>
                    <tr class="table-active">
                    <th scope="row">Active</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-primary">
                    <th scope="row">Primary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">Secondary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-success">
                    <th scope="row">Success</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-danger">
                    <th scope="row">Danger</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-warning">
                    <th scope="row">Warning</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-info">
                    <th scope="row">Info</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-light">
                    <th scope="row">Light</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Dark</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-active">
                    <th scope="row">Active</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-primary">
                    <th scope="row">Primary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">Secondary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-success">
                    <th scope="row">Success</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-danger">
                    <th scope="row">Danger</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-warning">
                    <th scope="row">Warning</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-info">
                    <th scope="row">Info</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-light">
                    <th scope="row">Light</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Dark</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-active">
                    <th scope="row">Active</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-primary">
                    <th scope="row">Primary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">Secondary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-success">
                    <th scope="row">Success</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-danger">
                    <th scope="row">Danger</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-warning">
                    <th scope="row">Warning</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-info">
                    <th scope="row">Info</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-light">
                    <th scope="row">Light</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Dark</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-active">
                    <th scope="row">Active</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-primary">
                    <th scope="row">Primary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">Secondary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-success">
                    <th scope="row">Success</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-danger">
                    <th scope="row">Danger</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-warning">
                    <th scope="row">Warning</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-info">
                    <th scope="row">Info</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-light">
                    <th scope="row">Light</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Dark</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    </tr>
                    </>
                }
                </table>
                </div>
                <div className="col-md-2">
                </div>
                </div>
                </div>
                <footer ref={loader} className="bg-light text-center text-lg-start">
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                <a className="text-dark" href="#">Talk</a>
                </div>
                </footer>
                </>
                );
            }
            
            export default HomePage;