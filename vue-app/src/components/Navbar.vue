<template>
    <div id="nav">
        <Router-Link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </Router-Link>
        <Router-Link to="/Characters">Characters</Router-Link>
        <Router-Link to="/Favorites">Favorites</Router-Link>
    </div>
</template>

<script>
    export default {
        name:'Navbar',
        props: ["logo","alt"]
    
    }
</script>

<style scoped>
#nav{
    background-color: #302e2e;
    border-bottom: 4px solid #111010;
    padding: 15px 50px;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    
}

#nav #logo-url{
    margin:auto;
    margin-left: 0;
}

#logo{
    width: 100px;
    height: 60px;
    transition: .5s;
    }

#nav a{
    color: #2b9dac;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}

#nav a:hover{
    color: #2cc95b;

}
</style>