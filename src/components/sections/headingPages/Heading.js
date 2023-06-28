import { Link } from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>온라인 AI 체험 프로그램</h1>
                    <p className="subsection">eDU Ai는 다양한 AI프로그램을 온라인으로 체험할 수 있는 플랫폼 입니다.</p>
                    <p>프로그램을 통해 AI를 체험하고 개념을 이해해보세요.</p>
                    <br></br>
                    <Link className="action-button" to="/about">SIGN UP</Link>
                    <Link className="action-button" to="/about">LEARN MORE</Link>
                </section>


            </article>
        </header>
    );
}