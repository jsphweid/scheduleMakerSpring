<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title></title>
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/assets/css/myGlobalStyles.css"/>" rel="stylesheet">
</head>
<body>
<jsp:include page="template/header.jsp"/>
<div class="container">



<p>
    Here are all the day predictions
</p>

<h2>Day Prediction Table</h2>

<table border="2" cellpadding="2">
    <tr>
        <th>Day Prediction</th>
        <th></th>
    </tr>
    <c:forEach items="${dayPredictions}" var="dayPrediction">
        <tr>
            <td>${dayPrediction.title}</td>
            <td><a href="showDayPrediction/${dayPrediction.id}"><button class="btn btn-default">Show</button></a></td>
        </tr>
    </c:forEach>
</table>

<a href="addDayPrediction.html">
    <button class="btn btn-default">
        Add Day Prediction >>
    </button>
</a>



</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>