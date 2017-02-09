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

<h2>Day Predictions</h2>

    <a class="btn btn-default" style="margin-bottom: 20px" href="addDayPrediction.html">
        Add Day Prediction
    </a>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <table class="table table-striped">
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
            </div>
        </div>
    </div>

</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>