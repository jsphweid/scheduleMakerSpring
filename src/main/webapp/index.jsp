<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { padding-top: 60px; }
    </style>
</head>
<body>

<h2>Welcome <sec:authentication property="name" /></h2>

<table>
    <tr>
        <th colspan="1"></th>
    </tr>
    <tr>
        <td><a class="btn btn-default" href="managePositions.html">Manage Employees >></a></td>
    </tr>
    <tr>
        <td><a class="btn btn-default" href="managePositions.html">Manage Positions >></a></td>
    </tr>
    <tr>
        <td><a class="btn btn-default" href="manageDayPredictions.html">Manage Day Predictions >></a></td>
    </tr>
</table>

<a class="btn btn-danger" href="j_spring_security_logout">Logout >></a>
</body>
</html>
