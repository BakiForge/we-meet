export default function Profile() {
    return <div>
    

    <main class="container main">

        <section class="welcome">
        <h1>Welcome, <span>Alex</span></h1>
        <p class="welcome__sub">Manage your account, share what you're up to, and find your next plan.</p>
        </section>

        <div class="grid">

        <section class="card">
            <div class="card__head">
            <h2>Account</h2>
            <p>Update your email and password.</p>
            </div>

            <form class="form" action="#" method="post" onsubmit="return false;">
            <label class="field">
                <span class="field__label">Email</span>
                <input type="email" name="email" value="alex@example.com" placeholder="you@example.com" />
            </label>

            <div class="field">
                <span class="field__label">Password</span>
                <div class="pw">
                <input type="checkbox" id="show-password" class="sr-only" />
                <input type="text" name="password" class="pw__input" value="secretpass123" autocomplete="new-password" aria-label="Password" />
                <label for="show-password" class="pw__eye"></label>
                </div>
            </div>

            <div class="form__actions">
                <button type="submit" class="btn btn--primary">Save changes</button>
                <button type="reset" class="btn btn--ghost">Cancel</button>
            </div>
            </form>
        </section>

        <section class="card">
            <div class="card__head">
            <h2>Add post</h2>
            <p>Share an update with the global chat.</p>
            </div>

            <form class="form" action="#" method="post" onsubmit="return false;">
            <label class="field">
                <span class="field__label">Title</span>
                <input type="text" name="title" placeholder="e.g. Coffee walk this Saturday?" />
            </label>

            <label class="field">
                <span class="field__label">Message</span>
                <textarea name="body" rows="4" placeholder="What's on your mind?"></textarea>
            </label>

            <div class="form__actions">
                <button type="submit" class="btn btn--primary">Add post</button>
            </div>
            </form>
        </section>

        <section class="card card--wide">
            <div class="card__head">
            <h2>Your previous posts</h2>
            <p>Everything you've shared recently.</p>
            </div>

            <ul class="posts">
            <li class="post">
                <div class="post__meta">
                <span class="post__avatar">AL</span>
                <div>
                    <strong>Coffee walk this Saturday?</strong>
                    <span class="post__time">2 days ago · 12 replies</span>
                </div>
                </div>
                <p>Looking for people to join a relaxed 1-hour walk and coffee around the river. All levels welcome.</p>
            </li>
            <li class="post">
                <div class="post__meta">
                <span class="post__avatar">AL</span>
                <div>
                    <strong>Study night at the library</strong>
                    <span class="post__time">1 week ago · 7 replies</span>
                </div>
                </div>
                <p>Quiet corner, two hours, no phones. Bring your own work and let's keep each other focused.</p>
            </li>
            <li class="post">
                <div class="post__meta">
                <span class="post__avatar">AL</span>
                <div>
                    <strong>Looking for a board game group</strong>
                    <span class="post__time">2 weeks ago · 3 replies</span>
                </div>
                </div>
                <p>Anyone up for a monthly game night? Strategy games preferred, snacks provided.</p>
            </li>
            </ul>
        </section>

        <a href="messages.html" class="chat-cta card card--wide">
            <div class="chat-cta__text">
            <span class="chat-cta__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>
            </span>
            <div>
                <h2>Ready to chat?</h2>
                <p>Jump into your conversations and plan your next meetup.</p>
            </div>
            </div>
            <span class="chat-cta__arrow" aria-hidden="true">→</span>
        </a>

        </div>
    </main>
 </div>;

    // TODO: CREATE PROFILE PAGE DESIGN
}