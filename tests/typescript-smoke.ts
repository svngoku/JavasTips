const supportedTargets: readonly string[] = ["ES2020"];

function supportsCurrentTypeScript(target: string): boolean {
  return supportedTargets.includes(target);
}

export { supportsCurrentTypeScript };
