import {useState} from "react";
import {FormInputType, Reponse} from "./Rickandmortydata.tsx";
import {Link} from "react-router-dom";
import {SetCharacterProps} from "./App.tsx";
import {charactersResponse} from "./characters.ts";

function CreateCharacterForm({setCharacters}: SetCharacterProps){

    const [form, setForm] = useState<FormInputType>( {
        id: 0,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin:
            { name: "", url: "", },
        location:
            { name: "", url: "", },
        image: "",
        episode: [],
        url: "",
        created: "", }
)

    const onChangeValues = (name: string, value: string | number) => {
        const newValues: FormInputType = {
            ...form,
            [name]: value,
        };
        setForm(newValues);
    }

    return (<form onSubmit={(e) =>{
            e.preventDefault();
            console.log(form);
            setCharacters(currentChars => {
                return [...currentChars, form];
            });
            //
        }}>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>
            <label htmlFor="status">Status:</label>
            <input type="text" id="status" name="status" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <label htmlFor="species">Species:</label>
            <input type="text" id="species" name="species" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <label htmlFor="type">Type:</label>
            <input type="text" id="type" name="type" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <label htmlFor="gender">Gender:</label>
            <input type="text" id="gender" name="gender" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <label htmlFor="originName">Origin Name:</label>
            <input type="text" id="originName" name="originName" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <label htmlFor="originUrl">Origin URL:</label>
            <input type="text" id="originUrl" name="originUrl" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <label htmlFor="locationName">Location Name:</label>
            <input type="text" id="locationName" name="locationName" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <label htmlFor="locationUrl">Location URL:</label>
            <input type="text" id="locationUrl" name="locationUrl" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <label htmlFor="image">Image:</label>
            <input type="text" id="image" name="image" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <label htmlFor="episode">Episode:</label>
            <input type="text" id="episode" name="episode" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <label htmlFor="url">URL:</label>
            <input type="text" id="url" name="url" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <label htmlFor="created">Created:</label>
            <input type="text" id="created" name="created" onChange={(e) => {
                onChangeValues(e.target.name, e.target.value);
            }}/>

            <button type="submit">Submit</button>
            <Link to={'/characters'}>meow</Link>

        </form>

    )
}

export default CreateCharacterForm;