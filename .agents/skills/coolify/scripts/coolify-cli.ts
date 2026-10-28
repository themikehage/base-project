const baseUrl = process.env.COOLIFY_BASE_URL?.replace(/\/+$/, "");
const token = process.env.COOLIFY_TOKEN;

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

async function coolify(path: string): Promise<string> {
  if (!baseUrl || !token) fail("Set COOLIFY_BASE_URL and COOLIFY_TOKEN.");
  const res = await fetch(`${baseUrl}/api/v1${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  const body = await res.text();
  if (!res.ok) fail(`Coolify ${res.status}: ${body}`);
  return body;
}

async function health(url: string): Promise<void> {
  const res = await fetch(url);
  console.log(`${res.status} ${url}`);
  if (!res.ok) process.exit(1);
}

const [command, target] = process.argv.slice(2);
if (!command || !target) fail("Usage: coolify-cli.ts <deploy|logs> <uuid> | health <url>");

switch (command) {
  case "deploy":
    console.log(await coolify(`/deploy?uuid=${encodeURIComponent(target)}&force=false`));
    break;
  case "logs":
    console.log(await coolify(`/applications/${encodeURIComponent(target)}/logs`));
    break;
  case "health":
    await health(target);
    break;
  default:
    fail(`Unknown command: ${command}`);
}
