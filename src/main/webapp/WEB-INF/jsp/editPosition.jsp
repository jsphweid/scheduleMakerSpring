<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<h1>Edit Position</h1>
<form:form method="POST" action="/scheduleMaker/updatePosition" modelAttribute="position">
    <table >
        <tr>
            <td></td>
            <td><form:hidden path="id" /></td>
        </tr>
        <tr>
            <td></td>
            <td><form:hidden path="belongsTo" /></td>
        </tr>
        <tr>
            <td>Title : </td>
            <td><form:input path="title" /></td>
        </tr>

        <tr>
            <td></td>
            <td><input type="submit" value="Update" /></td>
        </tr>
    </table>
</form:form>

<tr>
    <td><a href="delete/${position.id}"><button class="btn btn-danger">Delete Position</button></td>
</tr>