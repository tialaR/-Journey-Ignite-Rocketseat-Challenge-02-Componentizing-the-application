interface HeaderProps {
    genereTitle: string;
}

export function Header({ genereTitle }: HeaderProps) {
    return(
        <header>
          <span className="category">Categoria:<span> {genereTitle}</span></span>
        </header>
    );
}