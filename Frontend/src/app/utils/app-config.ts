class AppConfig {
    public readonly audiencesUrl: string = "http://localhost:4000/api/audiences/";
    public readonly gamesByAudiencesUrl: string = "http://localhost:4000/api/games-by-audiences/";
    public readonly gamesUrl: string = "http://localhost:4000/api/games/";
}

export const appConfig = new AppConfig();
