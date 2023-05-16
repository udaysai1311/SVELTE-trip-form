<script>
	
    import Tables from '../Components/Tables.svelte'
    import ShowTableHeader from '../Components/ShowTableHeader.svelte';

    let tripPlanForm = {
        name: '',
        email: '',
        phNo : '',
        noOfpersons: '',
        places: [],
    }
    
    let personsDetails = [];

    let showTable = false

    const onSubmit = (event) => {
       event.preventDefault()
       personsDetails = [...personsDetails,tripPlanForm]

       console.log(personsDetails)

       $:tripPlanForm = {
            name: '',
            email: '',
            phNo : '',
            noOfpersons: '',
            places: [],
        };

        if(personsDetails.length > 0){
            showTable = true
        }

    }

</script>


<div class="container">
    <div class="row">
        <div class="form-container d-flex flex-column justify-content-center align-items-center mb-5">
            <form class="shadow p-5 rounded-3" on:submit={onSubmit}>
                <h1 class="text-center mb-5">PLAN YOUR TRIP</h1>
                <label for="name">Full Name</label>
                <br />
                <input type="text" id="name" placeholder="Name" class="mb-3" bind:value={tripPlanForm.name}/>
                <br/>
                <label for="email">E-mail</label>
                <br />
                <input type="text" id="email" placeholder="yourmail@gamil.com" class="mb-3" bind:value={tripPlanForm.email}/>
                <br />
                <label for="number">Phone number</label>
                <br />
                <input type="text" id="number" class="mb-3" bind:value={tripPlanForm.phNo}/>
                <br />
                <label for="persons" class="mb-1">No of Persons</label>
                <br />
                <input type="radio" id="2" value="2" bind:group={tripPlanForm.noOfpersons}/>
                <label for="2">2</label>
                <input type="radio" id="4" value="4" bind:group={tripPlanForm.noOfpersons}/>
                <label for="4">4</label>
                <input type="radio" id="6" value="6" bind:group={tripPlanForm.noOfpersons}/>
                <label for="6">6</label>
                <input type="radio" id="10" value="10" bind:group={tripPlanForm.noOfpersons}/>
                <label for="10">10</label>
                <br />
                <label for="places" class="mt-3 mb-2">Select Places to Visit <span>(*select multiple options)</span></label>
                <select id="places" bind:value={tripPlanForm.places} multiple>
                    <option value="">Select Places</option>
                    <option value="usa">USA</option>
                    <option value="brazil">Brazil</option>
                    <option value="uk">UK</option>
                    <option value="spain">Spain</option>
                    <option value="germany">Germany</option>
                    <option value="japan">Japan</option>
                </select>
                <br />
                <div class="d-flex flex-row justify-content-center">
                    <button type="submit" class="btn btn-success mt-5 justify-content-center">Submit</button>
                </div>
            </form>
            {#if showTable}
                <div class="mt-5 shadow p-5">
                    <table>
                        <ShowTableHeader />
                        {#each personsDetails as detail}
                            <Tables detail={detail}/>
                        {/each}
                    </table>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .form-container{
        height: 100vh;
    }
    span{
        font-size: 10px;
        opacity: 0.8;
    }
    select{
        width: 100%;
    }
    table{
        border: 1px solid black;
        border-collapse: collapse;
    }
</style>