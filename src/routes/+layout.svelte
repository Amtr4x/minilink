<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<h1 class="pt-4 text-center text-3xl font-bold">Minilink 🔗️</h1>
<p class="text-center text-slate-800">Convert any large link in a short link with easy!</p>

{@render children()}
