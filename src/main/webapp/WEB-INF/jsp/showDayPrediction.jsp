<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Show Day Prediction</title>

    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
    <script src="<c:url value="/assets/js/dayPredictionJS/rgraph.moveablebargraph.min.js" />"></script>
    <script src="<c:url value="/assets/js/dayPredictionJS/dayPredictionMain.js" />"></script>
    <link rel="stylesheet" href="<c:url value="/assets/css/dayPrediction.css" />">


</head>
<body>
<jsp:include page="template/header.jsp"/>
<div class="container">



<h3>${dayPrediction.title}</h3>

<%--use this to convert to json--%>
<input type="hidden" id="jsonBom" value="${dayPredictionJSON}"/>

<div class="container-fluid">
    <div class="canvasBarGraph">
        <canvas id="cvs" width="1000" height="450" >
            [No canvas support]
        </canvas>
    </div>
</div>

<script type="text/javascript">
    window.onload = function () {
        drawGraph({
            color: "gray",
            adjustable: false
        }, $('#jsonBom').val());
    };
</script>

<a href="/scheduleMaker/editDayPrediction/${dayPrediction.id}">
    <button class="btn btn-default">Edit</button>
</a>

<a class="btn btn-default" href="/scheduleMaker/manageDayPredictions">Back to Day Predictions</a>



</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>
