<template>
    <form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
        <div class=" md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6 ">
            <div>
                <input type="text" name="name" class=" from-control" placeholder="Name*">
            </div>
            <div>
                <input type="email" name="email" class=" from-control" placeholder="Email*">
            </div>
            <div>
                <input type="text" name="subject" class=" from-control" placeholder="Subject *">
            </div>
            <div>
                <input type="website" name="website" class=" from-control" placeholder="Website Address">
            </div>
            <div class="md:col-span-2 col-span-1">
                <textarea class=" from-control" name="message" placeholder="Your Message*" rows="5"></textarea>
            </div>
        </div>
        <button class="btn btn-primary mt-[30px]" type="submit" name="submit">
            Send Message
        </button>
    </form>
</template>