import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { collection, getDocs, query, where, updateDoc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"; // Asegúrate de que esta ruta sea correcta
import { products } from "../../productsMock"; // Importa tu array de productos local

const AdminDashboard = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: 0,
        category: "",
        description: "",
        image: "",
        stock: 0,
        sex: "",
    });
    const [deleteProductName, setDeleteProductName] = useState("");

    // Actualizar o añadir productos
    const handleUpdateProducts = async () => {
        const productsCollection = collection(db, "products");

        try {
            for (const product of products) {
                const q = query(productsCollection, where("name", "==", product.name));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    querySnapshot.forEach(async (doc) => {
                        const updatedStock = product.stock;

                        await updateDoc(doc.ref, { stock: updatedStock });
                    });
                } else {
                    await addDoc(productsCollection, product);
                }
            }
            console.log("Productos actualizados correctamente");
        } catch (error) {
            console.error("Error al actualizar productos:", error);
        }
    };

    // Limpiar la colección
    const handleClearCollection = async () => {
        const productsCollection = collection(db, "products");

        try {
            const querySnapshot = await getDocs(productsCollection);
            for (const doc of querySnapshot.docs) {
                await deleteDoc(doc.ref);
            }
            console.log("Colección limpiada correctamente");
        } catch (error) {
            console.error("Error al limpiar la colección:", error);
        }
    };

    // Añadir un nuevo producto
    const handleAddProduct = async () => {
        const productsCollection = collection(db, "products");

        try {
            await addDoc(productsCollection, newProduct);
            console.log("Producto añadido correctamente");
            setNewProduct({
                name: "",
                price: 0,
                category: "",
                description: "",
                image: "",
                stock: 0,
                sex: "",
            });
        } catch (error) {
            console.error("Error al añadir producto:", error);
        }
    };

    // Eliminar un producto específico
    const handleDeleteProduct = async () => {
        const productsCollection = collection(db, "products");

        try {
            const q = query(productsCollection, where("name", "==", deleteProductName));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                querySnapshot.forEach(async (doc) => {
                    await deleteDoc(doc.ref);
                });
                console.log(`Producto "${deleteProductName}" eliminado correctamente`);
                setDeleteProductName("");
            } else {
                console.log(`Producto "${deleteProductName}" no encontrado`);
            }
        } catch (error) {
            console.error("Error al eliminar producto:", error);
        }
    };

    return (
        <Box sx={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>

            {/* Botones de acciones generales */}
            <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
                <Grid size={{xs : 12, sm : 6}}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleUpdateProducts}>
                        Actualizar Productos
                    </Button>
                </Grid>
                <Grid size={{xs : 12, sm : 6}}>
                    <Button variant="contained" color="secondary" fullWidth onClick={handleClearCollection}>
                        Eliminarlos todos
                    </Button>
                </Grid>
            </Grid>

            {/* Formulario para añadir un nuevo producto */}
            <Paper elevation={3} sx={{ padding: "20px", marginBottom: "20px" }}>
                <Typography variant="h5" gutterBottom>
                    Añadir Nuevo Producto
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={{xs : 12, sm : 6}}>
                        <TextField
                            label="Nombre"
                            fullWidth
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            required
                        />
                    </Grid>
                    <Grid size={{xs : 12, sm : 6}}>
                        <TextField
                            label="Precio"
                            type="number"
                            fullWidth
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                            required
                        />
                    </Grid>
                    <Grid size={{xs : 12, sm : 6}}>
                        <TextField
                            label="Categoría"
                            fullWidth
                            value={newProduct.category}
                            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                            required
                        />
                    </Grid>
                    <Grid size={{xs : 12, sm : 6}}>
                        <TextField
                            label="Stock"
                            type="number"
                            fullWidth
                            value={newProduct.stock}
                            onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
                            required
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            label="Descripción"
                            multiline
                            rows={3}
                            fullWidth
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                            required
                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            label="URL de la Imagen"
                            fullWidth
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                    </Grid>
                    <Grid size={12}>
                        <FormControl fullWidth required>
                            <InputLabel>Sexo</InputLabel>
                            <Select
                                value={newProduct.sex}
                                onChange={(e) => setNewProduct({ ...newProduct, sex: e.target.value })}
                                label="Sexo"
                                required
                            >
                                <MenuItem value="">Selecciona Sexo</MenuItem>
                                <MenuItem value="hombre">Hombre</MenuItem>
                                <MenuItem value="mujer">Mujer</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={12}>
                        <Button variant="contained" color="success" fullWidth onClick={handleAddProduct}>
                            Añadir Producto
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            {/* Formulario para eliminar un producto */}
            <Paper elevation={3} sx={{ padding: "20px" }}>
                <Typography variant="h5" gutterBottom>
                    Eliminar Producto
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={{xs : 12, sm : 8}}>
                        <TextField
                            label="Nombre del Producto a Eliminar"
                            fullWidth
                            value={deleteProductName}
                            onChange={(e) => setDeleteProductName(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid size={{xs : 12, sm : 4}}>
                        <Button variant="contained" color="error" fullWidth onClick={handleDeleteProduct}>
                            Eliminar Producto
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default AdminDashboard;
