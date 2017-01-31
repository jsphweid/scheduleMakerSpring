<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Add Day Prediction</title>
    <style>
        .error {
            color: #ff0000;
        }

        .errorblock {
            color: #000;
            background-color: #ffEEEE;
            border: 3px solid #ff0000;
            padding: 8px;
            margin: 16px;
        }
    </style>
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <script src="<c:url value="/assets/js/dayPredictionJS/rgraph.moveablebargraph.min.js" />"></script>
    <script src="<c:url value="/assets/js/dayPredictionJS/dayPredictionMain.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
    <link rel="stylesheet" href="<c:url value="/assets/css/dayPrediction.css" />">
    <link href="<c:url value="/assets/css/myGlobalStyles.css"/>" rel="stylesheet">
</head>
<body>
<jsp:include page="template/header.jsp"/>
<div class="container">



    <h2>Add new Day Prediction</h2>

    <form:form commandName="dayPrediction" path="dayPredictionForm">

        <form:errors path="*" cssClass="errorblock" element="div" />

        <label for="textinput1">
            Enter Title:
        </label>
        <form:input path="title" cssErrorClass="error" />
        <form:errors path="title" cssClass="error" />
        <br/>

        <form:hidden path="belongsTo" />
        <form:hidden path="hour00" value="" />
        <form:hidden path="hour01" value="" />
        <form:hidden path="hour02" value="" />
        <form:hidden path="hour03" value="" />
        <form:hidden path="hour04" value="" />
        <form:hidden path="hour05" value="" />
        <form:hidden path="hour06" value="" />
        <form:hidden path="hour07" value="" />
        <form:hidden path="hour08" value="" />
        <form:hidden path="hour09" value="" />
        <form:hidden path="hour10" value="" />
        <form:hidden path="hour11" value="" />
        <form:hidden path="hour12" value="" />
        <form:hidden path="hour13" value="" />
        <form:hidden path="hour14" value="" />
        <form:hidden path="hour15" value="" />
        <form:hidden path="hour16" value="" />
        <form:hidden path="hour17" value="" />
        <form:hidden path="hour18" value="" />
        <form:hidden path="hour19" value="" />
        <form:hidden path="hour20" value="" />
        <form:hidden path="hour21" value="" />
        <form:hidden path="hour22" value="" />
        <form:hidden path="hour23" value="" />

        <input type="submit" class="btn btn-default" value="Add Day Prediction"/>

    </form:form>

    <div class="container-fluid">
        <div class="canvasBarGraph">
            <canvas id="cvs" width="1000" height="450" >
                [No canvas support]
            </canvas>
        </div>
    </div>

    <script type="text/javascript">
        window.onload = function () {
            var rgraph = drawGraph({
                color: "red",
                adjustable: true
            });
            updateTagAssocations(rgraph, 'dayPredictionForm');
        };
    </script>


</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>
