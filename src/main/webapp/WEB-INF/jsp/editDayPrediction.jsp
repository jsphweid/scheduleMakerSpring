<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Editing ${dayPrediction.title}</title>

    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
    <script src="<c:url value="/assets/js/dayPredictionJS/rgraph.moveablebargraph.min.js" />"></script>
    <script src="<c:url value="/assets/js/dayPredictionJS/dayPredictionMain.js" />"></script>
    <link rel="stylesheet" href="<c:url value="/assets/css/dayPrediction.css" />">
    <link href="<c:url value="/assets/css/myGlobalStyles.css"/>" rel="stylesheet">

</head>
<body>
<jsp:include page="template/header.jsp"/>
<div class="container">


    <h2>Edit Day Prediction</h2>

    <form:form commandName="dayPrediction" path="dayPredictionForm" method="post" action="/updateDayPrediction/${dayPrediction.id}">

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

        <input type="submit" class="btn btn-default" value="Update"/>
        <a class="btn btn-default" href="/showDayPrediction/${dayPrediction.id}">Cancel</a>
        <br><br>
        <a class="btn btn-danger" href="delete/${dayPrediction.id}">Delete Day Prediction</a>



    </form:form>

    <div class="container-fluid">
        <div class="canvasBarGraph">
            <canvas id="cvs" width="1000" height="450" >
                [No canvas support]
            </canvas>
        </div>
    </div>

    <br><br><br><br>

    <script type="text/javascript">
        window.onload = function () {
            var rgraph = drawGraph({
                color: "red",
                adjustable: true
            }, "${dayPredictionJSON}");
            updateTagAssocations(rgraph, 'dayPredictionForm');
        };
    </script>


</div>
<jsp:include page="template/footer.jsp"/>
</body>
</html>
