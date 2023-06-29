<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>api-call-jsonplaceholder</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Usuarios</h1>
    <table id="tablaUsuarios">
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Ciudad</th>
        </tr>
    </table>
    <h2>Buscar usuario por ID</h2>
    <input type="text" id="idUsuario" placeholder="Introduce el ID del usuario">
    <button onclick="obtenerUsuario()">Obtener Usuario</button>
    <div id="resultado"></div>
    <script src="/script.js"></script>
</body>
</html>
