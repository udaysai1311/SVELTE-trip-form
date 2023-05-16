<script>
    export let detail
</script>

<tr>
    <td>{detail.name}</td>
    <td>{detail.email}</td>
    <td>{detail.phNo}</td>
    <td>{detail.noOfpersons}</td>
    <td>{detail.places}</td>
</tr>


<style>
    tr,td{
        text-align: center;
        border: 1px solid black;
        border-collapse: collapse;
        padding: 15px;
    }
</style>