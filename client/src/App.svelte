<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import Students from "./pages/Students/Students.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/students">StudentList</Link>
  </nav>

  <div>
    <Route path="/" component={Home}/>
    <Route path="/students" component={Students}/>
  </div>
</Router>