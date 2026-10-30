
export default function GlobalChat() {
    return ( <div>
    <main class="page">
        <div class="container">
        <div class="page__head">
            <h1 class="page__title">Chat with your <span class="accent">favorite</span></h1>
            <p class="page__text">Say hello, share a plan, or drop a thought — everyone here is nearby.</p>
        </div>

        <section class="panel panel--post" aria-labelledby="post-panel-title">
            <h2 class="panel__title" id="post-panel-title">Add post</h2>
            <p class="panel__text">Share an update with the global chat.</p>

            <form class="post-form" action="#" method="post">
            <div class="field">
                <label for="post-title">Title</label>
                <input
                id="post-title"
                name="title"
                type="text"
                placeholder="e.g. Coffee walk this Saturday?"
                autocomplete="off"
                />
            </div>

            <div class="field">
                <label for="post-message">Message</label>
                <textarea
                id="post-message"
                name="message"
                rows="4"
                placeholder="What's on your mind?"
                required
                ></textarea>
            </div>

            <button class="btn btn--primary" type="submit">Add post</button>
            </form>
        </section>

        <section class="panel" aria-labelledby="chat-panel-title">
            <h2 class="panel__title" id="chat-panel-title">Global chat</h2>
            <p class="panel__text">Everything people are sharing right now.</p>

            <div class="posts">
            <article class="post">
                <div class="post__head">
                <span class="post__avatar" aria-hidden="true">MK</span>
                <div>
                    <p class="post__name">Mia Kovač</p>
                    <p class="post__handle">mia_k</p>
                </div>
                </div>
                <p class="post__title">Coffee walk this Saturday?</p>
                <p class="post__text">
                Found a tiny place near the park with the best cinnamon rolls.
                Slow coffee around 11, no rush, everyone welcome.
                </p>
            </article>

            <article class="post">
                <div class="post__head">
                <span class="post__avatar" aria-hidden="true">SR</span>
                <div>
                    <p class="post__name">Stefan Ristić</p>
                    <p class="post__handle">stefan_r</p>
                </div>
                </div>
                <p class="post__title">Study night at the library</p>
                <p class="post__text">
                Thursday evening, second floor by the big windows. I'll bring the
                good highlighters and a very serious playlist.
                </p>
            </article>

            <article class="post">
                <div class="post__head">
                <span class="post__avatar" aria-hidden="true">LK</span>
                <div>
                    <p class="post__name">Lena Kaur</p>
                    <p class="post__handle">lena.kaur</p>
                </div>
                </div>
                <p class="post__title">Sunday walk by the river</p>
                <p class="post__text">
                10am, no agenda. Bring a friend or come alone — both work
                perfectly. We usually end up at the bakery anyway.
                </p>
            </article>

            <article class="post">
                <div class="post__head">
                <span class="post__avatar" aria-hidden="true">DP</span>
                <div>
                    <p class="post__name">David Pavlov</p>
                    <p class="post__handle">davidp</p>
                </div>
                </div>
                <p class="post__title">Board games tonight</p>
                <p class="post__text">
                Little café on the corner, 8pm. We need one more player and one
                more person to argue about the rules.
                </p>
            </article>
            </div>
        </section>
        </div>
     </main>
    </div>);
}