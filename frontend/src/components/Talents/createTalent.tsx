import React, { useState, ChangeEvent, FormEvent } from 'react';


interface FormData {
  nombre: string;
  categoria: string;
  genero: string;
  imagen: string;
  talla: string;
  precio: string;
  ubicacion: string;
  descripcion: string;
}

const CreateTalent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    categoria: '',
    genero: '',
    imagen: '',
    talla: '',
    precio: '',
    ubicacion: '',
    descripcion: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Nombre: ${formData.nombre}\nCategoria: ${formData.categoria}\nGenero: ${formData.genero}\nPrecio: ${formData.precio}`);
    // Aquí puedes agregar lógica para enviar los datos a un servidor, por ejemplo.
  };

  




    // <div className="contenedor">
    //   <form className="formulario" onSubmit={handleSubmit}>
    //     <h1 className="añade">añade tu producto</h1>
    //     <label className="nombre">
    //       Nombre:
    //       <input className="input" type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
    //     </label>
    //     <br />
    //     <label>
    //       Categoria:
    //       <input className="input" type="text" name="categoria" value={formData.categoria} onChange={handleChange} />
    //     </label>
    //     <label>
    //       Genero:
    //       <input className="input" type="text" name="genero" value={formData.genero} onChange={handleChange} />
    //     </label>
    //     <label>
    //       Marca:
    //       <input className="input" type="text" name="marca" value={formData.marca} onChange={handleChange} />
    //     </label>
    //     <label className="imagen">
    //       Imagen:
    //       <input className="input" type="file" name="imagen" value={formData.imagen} onChange={handleChange} />
    //     </label>
    //     <label className="talla">
    //       Talla:
    //       <input className="input" type="text" name="talla" value={formData.talla} onChange={handleChange} />
    //     </label>
    //     <label className="precio">
    //       Precio:
    //       <input className="input" type="number" name="precio" value={formData.precio} onChange={handleChange} />
    //     </label>
    //     <label>
    //       Ubicacion:
    //       <input className="input" type="text" name="ubicacion" value={formData.ubicacion} onChange={handleChange} />
    //     </label>
    //     <label className="descripcion">
    //       <p className="descrip">Descripcion:</p>
    //       <input className="input" type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} />
    //     </label>
    //     <br />
    //     <button className="botonenviar" type="submit">Enviar</button>
    //   </form>
    // </div>
  );
};

export default CreateTalent;
