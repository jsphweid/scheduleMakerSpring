<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Welcome</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/assets/css/myGlobalStyles.css"/>" rel="stylesheet">

</head>
<body>
<jsp:include page="WEB-INF/jsp/template/header.jsp"/>
<div class="container">



    <div class="row">
        <div class="col-md-6 indexParagraphs">
            <h2>Welcome <sec:authentication property="name" />,</h2>
            <p>
                scheduleMaker is a tool designed to make the task of creating a weekly
                schedule for a restaurant easier. The product of this is a graph
                displaying stats about how your schedule stacks up in terms of
                cost and efficiency.
            </p>
            <p>
                The person in charge of making the schedules inserts
                employees into a table and gives them a wage and a score.
                One also makes predictions about the busy-ness of each day.
                As one adds shifts to each employee, building the final schedule,
                one can see an hour by hour forcast showing how their schedule is
                shaping up with regards to the predictions they made.
            </p>
            <p>
                This project is built on Spring MVC / Java. It uses Spring Security,
                Hibernate, and MySQL. Most of the front-end pages are built with JSP.
                The actual schedule making part is all built on React. The project
                is hosted <a href="https://github.com/jsphweid/scheduleMakerSpring/">
                on Github.</a>
            </p>
        </div>

        <div class="col-md-6">
            <h2>In action:</h2>
            <div class="fill">
                <img src="https://res.cloudinary.com/dx6f6g5cv/image/upload/v1486747894/Screen_Shot_2017-02-10_at_11.30.21_AM_d8gyep.png" alt="">
            </div>
        </div>
    </div>

</div>
<%--<jsp:include page="WEB-INF/jsp/template/footer.jsp"/>--%>
</body>
</html>
