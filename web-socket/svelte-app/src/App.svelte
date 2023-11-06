<script>
	import { onMount } from 'svelte';
  
	let lastMessage = 'En attente de message...';
  
	onMount(() => {
	  const ws = new WebSocket('ws://localhost:3030/ws');
  
	  ws.onmessage = (event) => {
		lastMessage = event.data;
	  };
  
	  ws.onclose = () => {
		lastMessage = 'Connexion WebSocket fermée.';
	  };
  
	  ws.onerror = (error) => {
		lastMessage = 'Erreur WebSocket: ' + error.message;
	  };
	});
  </script>
  
  <main>
	<h1>WebSocket Message</h1>
	<p>Dernier message: {lastMessage}</p>
  </main>
  