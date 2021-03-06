# Saint-Constant: site exposition

Page de diffusion et valorisation pour le volet idéation et la démarche participative du projet Saint-Constant mené par la CPEUM.

Le site est conçu avec [SvelteKit](https://github.com/sveltejs/kit) et profite de l'adapteur de compilation statique ([adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)) pour produire des fichiers de distribution destinés à un hébergement statique, sans serveur Node.

Il est conseillé de travailler avec `pnpm` pour respecter le fichier `pnpm-lock.yaml` inclu dans le git du projet:

```sh
pnpm install
```

## Développement

Pour lancer le serveur de développement:

```sh
pnpm dev
# ou, pour ouvrir une fenêtre de fureteur automatiqument
# au lancement du serveur de développement:
pnpm dev -- --open
```

Pour construire une version de l'application et produire les fichiers de distribution:

```sh
pnpm build
```

Vous pouvez aussi visualiser localement les fichiers de `/build`:

```sh
pnpm preview
```

> Attention, n'utilisez pas cette commande pour servir l'application en environnement de production.

## Déploiement

La version de travail est présentement déployée sur la page _GitHub Pages_ du dépôt.

Si le site n'est pas hébergé à la racine du domaine, (comme c'est le cas avec _GitHub Pages_) assurez vous de faire un `build` en précisant adéquatement la racine (`base`) visée du site en déclarant la variable d'environnement `PUBLIC_BASE_PATH`. Par exemple, le résultat du [pipeline](/.github/workflows/deploy.yml) de `build` pour la diffusion sur _GitHub Pages_, où le site final est déployé à l'adresse `https://[domaine]/saint-constant/` plutôt que `https://[domaine]/`, ressemble à ceci:

```sh
PUBLIC_BASE_PATH=/saint-constant
```
