<script>
  import { page } from '$app/stores';
</script>

<h2>Oops!<br />{$page.status}: {$page.error.message}</h2>
<h4>Page goof'd. Try again!</h4>
<img src="bonk-cheems.gif" alt="I'm working on it..." />
